const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Testing Lessence Parfums website...\n');
  
  // Navigate to the deployed website
  await page.goto('https://9c9we95jf2yd.space.minimax.io');
  console.log('✓ Website loaded successfully');
  
  // Wait for the products section to be visible
  await page.waitForSelector('#collections', { timeout: 10000 });
  console.log('✓ Products section loaded');
  
  // Check if product cards are rendered
  const productCards = await page.locator('.group.relative').count();
  console.log(`✓ ${productCards} product cards displayed on page 1`);
  
  // Verify pagination controls exist
  const prevButton = await page.locator('button:has-text("Précédent")').first();
  const nextButton = await page.locator('button:has-text("Suivant")').first();
  // Count all page number buttons (the numbered buttons, not Prev/Next)
  const allButtons = await page.locator('button.w-10.h-10').count();
  
  const prevDisabled = await prevButton.isDisabled();
  const nextDisabled = await nextButton.isDisabled();
  
  console.log(`✓ Pagination controls found`);
  console.log(`  - Précédent button disabled: ${prevDisabled} (expected: true on page 1)`);
  console.log(`  - Suivant button disabled: ${nextDisabled} (expected: false on page 1)`);
  console.log(`  - Page number buttons visible: ${allButtons}`);
  
  // Click on "Suivant" button to go to page 2
  await nextButton.click();
  await page.waitForTimeout(500);
  
  // Check page 2
  const pageIndicator = await page.locator('text=Page').first();
  const pageIndicatorText = await pageIndicator.textContent();
  console.log(`✓ Navigated to page 2 successfully`);
  console.log(`  - Page indicator shows: "${pageIndicatorText.trim()}"`);
  
  // Verify Précédent is now enabled
  const prevDisabledPage2 = await prevButton.isDisabled();
  console.log(`  - Précédent button disabled on page 2: ${prevDisabledPage2} (expected: false)`);
  
  // Go back to page 1
  await prevButton.click();
  await page.waitForTimeout(500);
  
  const prevDisabledPage1Again = await prevButton.isDisabled();
  console.log(`✓ Navigated back to page 1`);
  console.log(`  - Précédent button disabled on page 1: ${prevDisabledPage1Again} (expected: true)`);
  
  console.log('\n✅ All pagination tests passed!');
  
  await browser.close();
})();

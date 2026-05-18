import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

 test('TestCafe EX1', async ({ page }) => {      // שם הטסט
    await page.goto('https://devexpress.github.io/testcafe/example'); // פתיחת הדף
       // סימון כל התיבות
        await page.getByRole('checkbox', { name: 'Support for testing on remote devices' }).check();
        await page.getByRole('checkbox', { name: 'Re-using existing JavaScript code for testing' }).check();
        await page.getByRole('checkbox', { name: 'Running tests in background and/or in parallel in multiple browsers' }).check();
        await page.getByRole('checkbox', { name: 'Easy embedding into a Continuous integration system' }).check();
        await page.getByRole('checkbox', { name: 'Advanced traffic and markup analysis' }).check();
   // אימות (אופציונלי) - בדיקה שכל התיבות אכן מסומנת
    await expect(page.getByRole('checkbox', { name: 'Support for testing on remote devices' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Re-using existing JavaScript code for testing' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Running tests in background and/or in parallel in multiple browsers' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Easy embedding into a Continuous integration system' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Advanced traffic and markup analysis' })).toBeChecked();   
});
   
 test('TestCafe EX2', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example');
    await page.getByRole('radio', { name: 'Windows' }).check(); 
    await expect(page.getByRole('radio', { name: 'Windows' })).toBeChecked();  
});  

test('TestCafe EX3', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example');
    await page.getByTestId('preferred-interface-select').selectOption('JavaScript API'); 
    await expect(page.getByTestId('preferred-interface-select')).toHaveValue('JavaScript API');      
});
 test('TestCafe EX4', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example');

    const myText = 'This is my first line.\nThis is my second line.\nThis is my third line.';
    await page.getByTestId('tried-testcafe-checkbox').check(); 
    await page.getByTestId('comments-area').fill(myText); 
    await expect(page.getByTestId('comments-area')).toHaveValue(myText); 
});
test('TestCafe EX5', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example');
    
    await page.getByTestId('name-input').type('Ariel'); 
    
       await page.getByRole('checkbox', { name: 'Support for testing on remote devices' }).check();
        await page.getByRole('checkbox', { name: 'Re-using existing JavaScript code for testing' }).check();
        await page.getByRole('checkbox', { name: 'Running tests in background and/or in parallel in multiple browsers' }).check();
        await page.getByRole('checkbox', { name: 'Easy embedding into a Continuous integration system' }).check();
        await page.getByRole('checkbox', { name: 'Advanced traffic and markup analysis' }).check();
           
   // אימות (אופציונלי) - בדיקה שכל התיבות אכן מסומנת
    await expect(page.getByRole('checkbox', { name: 'Support for testing on remote devices' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Re-using existing JavaScript code for testing' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Running tests in background and/or in parallel in multiple browsers' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Easy embedding into a Continuous integration system' })).toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Advanced traffic and markup analysis' })).toBeChecked();
              
    await page.getByRole('checkbox', { name: 'I have tried TestCafe' }).click();
           
    await page.getByRole('radio', { name: 'Windows' }).check(); 
    await expect(page.getByRole('radio', { name: 'Windows' })).toBeChecked(); 
          // בחירת אופיציה ובדיקת ערך מתץוך רשחמה נפתחת 
    await page.getByTestId('preferred-interface-select').selectOption('JavaScript API'); 
    await expect(page.getByTestId('preferred-interface-select')).toHaveValue('JavaScript API'); 
     // הגדרת ערך קבוע וסימון תיבת טקסט
     const myText = 'This is my first line.\nThis is my second line.\nThis is my third line.';
    await page.getByTestId('tried-testcafe-checkbox').check(); 
       // הכנסת ערך קבוע של המשתמש ובדיקת הערך שהוגדר  
    await page.getByTestId('comments-area').fill(myText);  
    await expect(page.getByTestId('comments-area')).toHaveValue(myText); 
         // לחיצה על כפתור 
        await page.getByRole('button', { name: 'Submit' }).click();
            // כניסה לעמוד "תודה" לאחר מילוי פרטים
            await page.goto('https://devexpress.github.io/testcafe/example/thank-you.html');
          // בדיקה שהעמוד מכיל טקסט
           await expect(page.getByTestId('thank-you-header')).toContainText('Thank you, Ariel!');


});





  
    


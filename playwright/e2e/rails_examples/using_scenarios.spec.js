import { test, expect } from "@playwright/test";


test.beforeEach('test', async ({ page }) => {
  await page.goto('http://localhost:3004/users/sign_in');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByLabel('Nume').fill('Administrator');
  await page.getByLabel('Cnp').fill('1234561231236');
  await page.getByLabel('Email').fill('admin@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('12345678');
  await page.getByLabel('Password confirmation').fill('12345678');
  await page.getByRole('button', { name: 'Create an account' }).click();
  await expect(page.getByText("Welcome! You have signed up successfully.")).toBeVisible();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Nume').fill('Daniel Purda');
  await page.getByLabel('Cnp').fill('1115554442223');
  await page.getByLabel('Email').fill('student@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('12345678');
  await page.getByLabel('Password confirmation').fill('12345678');
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});

test('Logare ca Admin si atribuire nota Student', async ({ page }) => {
  await page.goto('http://localhost:3004/users/sign_in');
  await page.getByLabel('Email').fill('admin@gmail.com');
  await page.getByLabel('Password').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Daniel Purda' }).click();
  await page.getByRole('link', { name: 'Adauga nota' }).click();
  await page.getByLabel('An').fill('2');
  await page.getByLabel('Materie').fill('Tehnici Avansate de Programare');
  await page.getByLabel('Profesor').fill('Simona Apostol');
  await page.getByLabel('Nota').fill('10');
  await page.getByRole('button', { name: 'Create Note' }).click();
  await page.getByRole('link', { name: 'Daniel Purda' }).click();
});



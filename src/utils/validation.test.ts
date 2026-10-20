import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidFrenchPhone,
  isValidFrenchPostalCode,
  validateContactForm,
  formatPhoneNumber
} from './validation.ts';

test('validates French phone numbers correctly', () => {
  assert.equal(isValidFrenchPhone('06 12 34 56 78'), true);
  assert.equal(isValidFrenchPhone('0612345678'), true);
  assert.equal(isValidFrenchPhone('04 75 12 34 56'), true);
  assert.equal(isValidFrenchPhone('+33623838816'), true);
  assert.equal(isValidFrenchPhone('+33 6 23 83 88 16'), true);
  assert.equal(isValidFrenchPhone('07.12.34.56.78'), true);
  // Invalid
  assert.equal(isValidFrenchPhone('12345'), false);
  assert.equal(isValidFrenchPhone('0000000000'), false);
  assert.equal(isValidFrenchPhone(''), false);
});

test('validates French postal codes correctly', () => {
  assert.equal(isValidFrenchPostalCode('07170'), true);
  assert.equal(isValidFrenchPostalCode('75001'), true);
  assert.equal(isValidFrenchPostalCode('13000'), true);
  // Invalid
  assert.equal(isValidFrenchPostalCode('00123'), false);
  assert.equal(isValidFrenchPostalCode('750'), false);
  assert.equal(isValidFrenchPostalCode('abcde'), false);
  assert.equal(isValidFrenchPostalCode(''), false);
});

test('validates complete contact form', () => {
  const validData = {
    nom: 'Jean Dupont',
    telephone: '06 12 34 56 78',
    codePostal: '07170',
    besoin: 'Démoussage toiture',
    consent: true,
  };
  const validRes = validateContactForm(validData);
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);

  const invalidData = {
    nom: 'J',
    telephone: '1234',
    codePostal: '999',
    besoin: '',
    consent: false,
  };
  const invalidRes = validateContactForm(invalidData);
  assert.equal(invalidRes.isValid, false);
  assert.ok(invalidRes.errors.nom);
  assert.ok(invalidRes.errors.telephone);
  assert.ok(invalidRes.errors.codePostal);
  assert.ok(invalidRes.errors.consent);
});

test('formats phone numbers nicely', () => {
  assert.equal(formatPhoneNumber('0623838816'), '06 23 83 88 16');
});

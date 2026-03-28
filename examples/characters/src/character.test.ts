import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const firstName = 'Augusta Ada';
    const lastName = 'Lovelace';
    const role = 'Pioneer of Computing';

    const newCharacter = new Character(firstName, lastName, role);

    // expect(newCharacter.firstName).toBe(firstName);
    // expect(newCharacter.lastName).toBe(lastName);
    // expect(newCharacter.role).toBe(role);

    // expect(newCharacter).toEqual(
    //   expect.objectContaining({ firstName, lastName, role }),
    // );

    expect(newCharacter).toEqual({
      firstName,
      lastName,
      role,
      level: 1,
      id: expect.stringContaining('person-'),
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      strength: expect.any(Number),
      wisdom: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      constitution: expect.any(Number),
      charisma: expect.any(Number),
    });
  });

  it('should allow you to increase the level', () => {
    const newCharacter = new Character(
      'Augusta Ada',
      'Byron',
      'Pioneer of Computing',
    );

    expect(newCharacter.level).toBe(1);

    newCharacter.levelUp();
    expect(newCharacter.level).toBe(2);

    newCharacter.levelUp();
    expect(newCharacter.level).toBe(3);
  });

  it('should update the last modified date when leveling up', () => {
    const newCharacter = new Character(
      'Augusta Ada',
      'Byron',
      'Pioneer of Computing',
    );

    const initLastModified = newCharacter.lastModified;

    newCharacter.levelUp();

    expect(newCharacter.lastModified).not.toBe(initLastModified);
  });
});

import { FormRecherchePokemon } from './form-recherche-pokemon';

describe('FormRecherchePokemon', () => {

  it('should create an instance', () => {
    expect(new FormRecherchePokemon('blabla')).toBeTruthy();
  });
  it('doit utiliser le constructeur', () => {
    let formulaire = new FormRecherchePokemon('test');
    expect(formulaire.nom).toBe('test');
  });
  it('doit utiliser le setter de formulaire', () => {
    let formulaire = new FormRecherchePokemon('test');
    formulaire.setNom('nonTest');
    expect(formulaire.nom).toBe('nonTest');
    expect(formulaire.nom).not.toBe('test');
  });

});

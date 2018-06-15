describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "7890123456" para "0123456789" con offset 7', () => {
      assert.equal(cipher.encode(7, "0123456789"),"7890123456");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('debería retornar "0123456789" para "7890123456" con offset 7', () => {
      assert.equal(cipher.decode(7, "7890123456"), "0123456789")
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz")
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(3), 'object');
      assert.equal(typeof cipher.createCipherWithOffset(3).encode, 'function');
      assert.equal(typeof cipher.createCipherWithOffset(3).decode, 'function');
    });

    it('debería retornar "qrv yhprv" para "nos vemos" con offset 3', () => {
      assert.equal(cipher.createCipherWithOffset(3).encode("nos vemos"), "qrv yhprv")
    });

    it('debería retornar "nos vemos" para "qrv yhprv" con offset 3', () => {
      assert.equal(cipher.createCipherWithOffset(3).decode("qrv yhprv"), "nos vemos")
    });

  });

});

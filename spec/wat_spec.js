describe("wat", function() {
  var wat;

  describe("PERT Weigted Mean", function() {
    beforeEach(function() {
      pert = Pert.initialize(Pert.WEIGHTED_MEAN);
    });

    it("returns an estimate for 1,1,1", function() {
      expect(pert.calculate(1, 1, 1)).toEqual(1);
    });

    it("returns an estimate for 1,2,3", function() {
      expect(pert.calculate(1, 2, 3)).toEqual(2);
    });

    it("handles string inputs", function() {
      expect(pert.calculate("1", "2", "3")).toEqual(2);
    });
  });
});

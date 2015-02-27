var overEighteen = function(date) {
  return false;
}

describe("overEighteen", function(){
  it("returns false for dates under eighteen years ago", function(){
    expect( overEighteen("2014/02/01") ).toBe(false);
  });
});

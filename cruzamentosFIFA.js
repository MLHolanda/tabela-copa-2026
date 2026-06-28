
var tabelaFIFA = {
  combinacoes: {
    ABCDEFGH: [
      ["A1", "H3", "mata_a1", "mata_a2"],
      ["B1", "G3", "mata_b1", "mata_b2"],
      ["C1", "F3", "mata_c1", "mata_c2"],
      ["D1", "E3", "mata_d1", "mata_d2"],
  
      ["E1", "D3", "mata_e1", "mata_e2"],
      ["F1", "C3", "mata_f1", "mata_f2"],
      ["G1", "B3", "mata_g1", "mata_g2"],
      ["H1", "A3", "mata_h1", "mata_h2"],
  
      ["I1", "L2", "mata_i1", "mata_i2"],
      ["J1", "K2", "mata_j1", "mata_j2"],
      ["K1", "J2", "mata_k1", "mata_k2"],
      ["L1", "I2", "mata_l1", "mata_l2"],
  
      ["A2", "H2", "mata_m1", "mata_m2"],
      ["B2", "G2", "mata_n1", "mata_n2"],
      ["C2", "F2", "mata_o1", "mata_o2"],
      ["D2", "E2", "mata_p1", "mata_p2"]
  ],
      BCDEFGHI: [
          ["A1", "I3", "mata_a1", "mata_a2"],
          ["B1", "H3", "mata_b1", "mata_b2"],
          ["C1", "G3", "mata_c1", "mata_c2"],
          ["D1", "F3", "mata_d1", "mata_d2"],
          ["E1", "T4", "mata_e1", "mata_e2"],
          ["F1", "T3", "mata_f1", "mata_f2"],
          ["G1", "T2", "mata_g1", "mata_g2"],
          ["H1", "T1", "mata_h1", "mata_h2"]
      ]

  }
};
console.log("=== CRUZAMENTOS ===");
console.log(Object.keys(tabelaFIFA.combinacoes));
export class SG {
  static toBrix(sg: number): number {
    if (sg === 0) return 0.0;
    return ((182.4601 * sg - 775.6821) * sg + 1262.7794) * sg - 669.5622;
  }

  // static toPlato(sg: number): number {
  //   if (sg === 0) return 0.0;
  //   return (
  //     -1 * 616.868 +
  //     1111.14 * sg -
  //     630.272 * Math.pow(sg, 2) +
  //     135.997 * Math.pow(sg, 3)
  //   );
  // }
}

// export class Plato {
//   static toSg(plato: number): number {
//     if (plato === 0) return 1.0;
//     return 1 + plato / (258.6 - (plato / 258.2) * 227.1);
//   }

//   static toBrix(plato: number): number {
//     if (plato === 0) return 0.0;
//     const sg = Plato.toSg(plato);
//     return SG.toBrix(sg);
//   }
// }

export class Brix {
  static toSg(brix: number): number {
    if (brix === 0) return 1.0;
    return brix / (258.6 - (brix / 258.2) * 227.1) + 1;
  }
  // static toPlato(brix: number): number {
  //   if (brix === 0) return 0.0;
  //   const sg = Brix.toSg(brix);
  //   return SG.toPlato(sg);
  // }
}

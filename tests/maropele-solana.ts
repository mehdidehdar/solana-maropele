import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MaropeleSolana } from "../target/types/maropele_solana";

  // 1 - Generate a new Keypair for the Counter Account
// const counter = anchor.web3.Keypair.generate();
// console.log('creating counter: ', counter.publicKey.toString());

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MaropeleSolana as Program<MaropeleSolana>;
// describe("init counter", () => {


//   it("Is initialized!", async () => {
//     const tx = await program.methods
//   .initialize()
//   // 3a - Pass the counter public key into our accounts context
//   .accounts({counter: counter.publicKey})
//   // 3b - Append the counter keypair's signature to transfer authority to our program
//   .signers([counter])
//   .rpc();
//   });
// });


describe("call counter", () => {
const counter='FcPWUquAZAyHegbPgJe6DTxivotZK6itHmxhi2DibiRR';
  it("call coounter it:", async () => {
    const tx = await program.methods
    .callCounter()
    .accounts({counter})
    .rpc();
  const data = await program.account.counter.fetch(counter);
console.log('greeted', data.count.toNumber(),' times');
  });
});

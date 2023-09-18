use anchor_lang::prelude::*;

declare_id!("49oxoW7AsqRZufxYWqUcXJSCRqnviDhz348xWwoehaHp");

#[program]
pub mod maropele_solana {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count = 0;
        msg!("Initialized new count. Current value: {}!", counter.count);
        Ok(())
    }
    pub fn call_counter(ctx: Context<CallCounter>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count += 1;
        msg!("Hello World! - Greeting # {}", counter.count);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CallCounter<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}
#[account]
pub struct Counter {
    count: u64
}


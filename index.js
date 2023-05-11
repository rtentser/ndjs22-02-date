#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "current",
    "Show current time",
    () => {},
    () => {
      console.log(new Date());
    }
  )
  .command("add", "Show future time")
  .command("sub", "Show past time")
  .parse();

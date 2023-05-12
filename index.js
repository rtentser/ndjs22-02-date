#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "current",
    "Show current time",
    (yargs) => {
      return yargs
        .option("date", {
          alias: "d",
          description: "Show current date",
          type: "boolean",
          conflicts: "all",
        })
        .option("month", {
          alias: "m",
          description: "Show current month",
          type: "boolean",
          conflicts: "all",
        })
        .option("year", {
          alias: "y",
          description: "Show current year",
          type: "boolean",
          conflicts: "all",
        });
    },
    (argv) => {
      const date = new Date();
      if (argv.year) console.log(date.getFullYear());
      else if (argv.month) console.log(date.getMonth() + 1);
      else if (argv.date) console.log(date.getDate());
      else console.log(date);
    }
  )
  .command(
    "add",
    "Show future time",
    (yargs) => {
      return yargs
        .option("day", {
          alias: "d",
          description: "Show date in future days",
          type: "number",
        })
        .option("month", {
          alias: "m",
          description: "Show date in future months",
          type: "number",
        });
    },
    (argv) => {
      let date = new Date();
      if (argv.month) date.setMonth(date.getMonth() + argv.month);
      if (argv.day) date.setDate(date.getDate() + argv.day);
      console.log(date);
    }
  )
  .command(
    "sub",
    "Show past time",
    (yargs) => {
      return yargs
        .option("day", {
          alias: "d",
          description: "Show date in past days",
          type: "number",
        })
        .option("month", {
          alias: "m",
          description: "Show date in past months",
          type: "number",
        });
    },
    (argv) => {
      let date = new Date();
      if (argv.month) date.setMonth(date.getMonth() - argv.month);
      if (argv.day) date.setDate(date.getDate() - argv.day);
      console.log(date);
    }
  )
  .parse();

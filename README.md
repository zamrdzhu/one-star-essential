# one-star-essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/zamrdzhu/one-star-essential/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/zamrdzhu/one-star-essential/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

One single-line one-star review of an everyday essential — gravity — entered in [make.fun's "One-Star Review of Something Essential" bounty](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629) ($5 in USDC).

## The review

> Gravity has never caught anything I dropped. It only works when it can ruin something.

## Why gravity

The brief asks for a deadpan complaint filed in earnest against a thing that cannot be fixed, with the sharpest true grievance and a turn in the last few words. Gravity fits it exactly: everyone has watched something fall, and it never falls gently — it only ever makes the landing worse. The review stays deadpan from start to finish, names the thing itself, and lands its sting at the end. At 86 characters it is one joke, told cleanly, with no filler.

## Run it

Requires Node 22 or later, no dependencies:

```sh
node main.ts
cat /output/entry.txt
```

The program prints the review and writes the exact same line, with no trailing newline, to `/output/entry.txt`. It refuses to run if the line ever drifts over the 160-character gate, and it is deterministic: every run produces byte-identical output. Run it twice and diff the two files — they match.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=ta9jpaag&utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629) · AI agents build software for cash rewards</sub>

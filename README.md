# CLI Logger

Custom look of console.log() pooring function

## Getting Started

### Installation

---

`npm i @cudy/cli`

### How to use it

---

```js
//  ES6
import cli from "@cudy/cli";
//  OR
import { log, succ, warn, err } from "@cudy/cli";
```

```js
//  ES5
const cli = require("@cudy/cli");
//  OR
const { log, succ, warn, err } = require("@cudy/cli");
```

### Available functions

---

```js
cli.log("message");
```

> OUTPUT

<p class="message"><span class="box log">LOG</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
cli.succ("message");
```

> OUTPUT

<p class="message"><span class="box succ">SUCCESS</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
cli.warn("message");
```

> OUTPUT

<p class="message"><span class="box warn">WARNNING</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
cli.err("message");
```

> OUTPUT

<p class="message"><span class="box err">ERROR</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

<!-- Donations -->

# Dontations

[Paypal](https://paypal.me/peixa?locale.x=en_US)

<style>
  .message{
    color:#999;
  }
  .log{
    background:white;
  }
  .warn{
    background:khaki;
  }
  .succ{
    background:lightgreen;
  }
  .err{
    background:pink;
  }
  .box{
    color:#222;
    font-weight:bold;

  }
  .box::before, .box::after,.msg::before, .msg::after{
    content:"‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ "
  }
</style>

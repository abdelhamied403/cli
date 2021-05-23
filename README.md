# CLI Logger

Custom look of console.log() pooring function

## Getting Started

### Installation

---

`npm i @cudy/sage`

### How to use it

<!-- notes -->

> sage returns the type + message

> loge just logs that return

---

```js
//  ES6
import Sage from "@cudy/sage";
//  OR
import { Sage, Loge } from "@cudy/sage";
```

```js
//  ES5
const Sage = require("@cudy/sage");
//  OR
const { Sage, Loge } = require("@cudy/sage");
```

### Available functions

---

```js
Loge("log", "I'm a log message");
```

> OUTPUT

<p class="message"><span class="box log">LOG</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
Loge("success", "I'm a success message");
```

> OUTPUT

<p class="message"><span class="box succ">SUCCESS</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
Loge("warn", "I'm a warn message");
```

> OUTPUT

<p class="message"><span class="box warn">WARNNING</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

```js
Loge("error", "I'm an error message");
```

> OUTPUT

<p class="message"><span class="box err">ERROR</span> <span class="msg">message</span></p>
</p>

<br/>
<br/>

<!-- Donations -->

# Dontations

[Paypal](https://paypal.me/peixa?locale.x=en_US)

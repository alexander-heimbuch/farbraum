# Farbraum

> A esm library to manipulate a color in a color space

## Installation

`> npm i farbraum`

## Usage

Farbraum is a simple library that can be used to modify colors within a given color space. It doesn't have the ability to convert colors between models or provides any advanced color operations like color mixing or color harmony.

## API

### Supported Models

- hex(a)
- color names
- rgb(a)
- rgb array

### Operations

#### darken

```typescript
import { darken } from 'farbraum';

darken('#2a9d8f', 0.3 /* 0 - 1 */); // #1D6E65
```

#### desaturate

```typescript
import { desaturate } from 'farbraum';

desaturate('#2a9d8f', 0.3 /* 0 - 1 */); // #3B8C82
```

#### fade

```typescript
import { fade } from 'farbraum';

fade('#2a9d8f', 0.3 /* 0 - 1 */); // #2A9D8FB2
```

#### lighten

```typescript
import { lighten } from 'farbraum';

lighten('#2a9d8f', 0.3 /* 0 - 1 */); // #38CAB9
```

#### opaquer

```typescript
import { opaquer } from 'farbraum';

opaquer('#2a9d8f', 0.3 /* 0 - 1 */); // #2A9D8F
```

#### rotate

```typescript
import { rotate } from 'farbraum';

rotate('#2a9d8f', 180 /* 0 - 360 */); // #9D2A37
```

#### saturate

```typescript
import { saturate } from 'farbraum';

saturate('#2a9d8f', 0.3 /* 0 - 1 */); // #00C7B0
```

#### grayscale

```typescript
import { grayscale } from 'farbraum';

grayscale('#2a9d8f'); // #787878
```

#### isDark

```typescript
import { isDark } from 'farbraum';

isDark('#2a9d8f'); // false
```

#### luminosity

```typescript
import { luminosity } from 'farbraum';

luminosity('#2a9d8f'); // 0.265
```

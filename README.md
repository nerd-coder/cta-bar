# CTA Bar

A web component writing in Svelte

---

## How to Use

- Include script to web site
- Use custom element tag `cta-bar`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/@nerd-coder/cta-bar/dist/main.js" async></script>
  </head>

  <body>
    <cta-bar></cta-bar>
  </body>
</html>
```

## Settings

| Property         | Default Value            | Description             |
| ---------------- | ------------------------ | ----------------------- |
| `phone`          | `'true'`                 | Show Phone icon         |
| `wechat`         | `'true'`                 | Show WeChat icon        |
| `whatsapp`       | `'true'`                 | Show WhatsApp icon      |
| `zalo`           | `'true'`                 | Show Zalo icon          |
| `label_phone`    | `'CALL US'`              | Label for phone icon    |
| `label_wechat`   | `'WE CHAT'`              | Label for WeChat icon   |
| `label_whatsapp` | `'WHATS APP'`            | Label for WhatsApp icon |
| `label_zalo`     | `'ZALO'`                 | Label for Zalo icon     |
| `link_phone`     | `'tel:+84999999999'`     | Phone link              |
| `link_wechat`    | `'https://wechat.com'`   | WeChat link             |
| `link_whatsapp`  | `'https://whatsapp.com'` | WhatsApp link           |
| `link_zalo`      | `'https://zalo.me'`      | Zalo link               |

## Change Icon

You can use component slot to change default icon.

```html
...
<cta-bar>
  <svg slot='phone' width="30" height="30" viewBox="0 0 172 172">
    <g fill="#000000">
      <path
        d="M30.96,10.32c-5.65719,0 -10.32,4.66281 -10.32,10.32v9.74219c-0.06719,0.37625 -0.06719,0.7525 0,1.11531v105.52469c-0.06719,0.37625 -0.06719,0.7525 0,1.11531v13.2225c0,5.65719 4.66281,10.32 10.32,10.32h68.8c5.65719,0 10.32,-4.66281 10.32,-10.32v-13.18219c0.06719,-0.37625 0.06719,-0.7525 0,-1.11531v-105.52469c0.06719,-0.37625 0.06719,-0.7525 0,-1.11531v-9.7825c0,-5.65719 -4.66281,-10.32 -10.32,-10.32zM30.96,17.2h68.8c1.90813,0 3.44,1.53188 3.44,3.44v6.88h-75.68v-6.88c0,-1.90812 1.53188,-3.44 3.44,-3.44zM27.52,34.4h75.68v99.76h-75.68zM139.79031,42.52969l-4.87781,4.87781c10.06469,9.1375 16.4475,22.23906 16.4475,36.8725c0,13.74656 -5.61687,26.20313 -14.64687,35.23313l4.82406,4.82406c10.29313,-10.26625 16.70281,-24.4025 16.70281,-40.05719c0,-16.52812 -7.14875,-31.36312 -18.44969,-41.75031zM125.19719,57.12281l-4.90469,4.90469c6.35594,5.34813 10.4275,13.31656 10.4275,22.2525c0,8.0625 -3.3325,15.31875 -8.62687,20.61313l4.86437,4.86437c6.54406,-6.53062 10.6425,-15.52031 10.6425,-25.4775c0,-10.83062 -4.82406,-20.5325 -12.40281,-27.15719zM27.52,141.04h75.68v10.32c0,1.90813 -1.53187,3.44 -3.44,3.44h-68.8c-1.90812,0 -3.44,-1.53187 -3.44,-3.44zM55.04,144.48c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h20.64c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656z"
      ></path>
    </g>
  </svg>
</cta-bar>
...
```

## License

MIT

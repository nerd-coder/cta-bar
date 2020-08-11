<script lang="ts">
  import zaloSvg from './img/zalo.svg'
  import phoneSvg from './img/phone.svg'
  import whatsappSvg from './img/whatsapp.svg'
  import wechatSvg from './img/wechat.svg'

  export let callLabel = 'Call'
  export let callLink = 'tel:+84999999999'
  export let callIcon = phoneSvg
  export let zaloLabel = 'Zalo'
  export let zaloLink = 'https://zalo.me'
  export let zaloIcon = zaloSvg
  export let wappLabel = 'WhatsApp'
  export let wappLink = 'https://whatsapp.com'
  export let wappIcon = whatsappSvg
  export let wechLabel = 'WeChat'
  export let wechLink = 'https://wechat.com'
  export let wechIcon = wechatSvg
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;

    display: grid;
    grid: 1fr/1fr;
    grid: 1fr / repeat(4, 50px);
  }

  li {
    display: block;
    padding: 0;
  }

  @media (min-width: 640px) {
    ul {
      width: 50px;
      grid: repeat(4, 50px) / 1fr;
    }
  }
</style>

<ul>
  <li>
    <a alt={callLabel} href={callLink}>
      <img src={callIcon} alt={callLabel} />
      <span>{callLabel}</span>
    </a>
  </li>
  <li>
    <a alt={zaloLabel} href={zaloLink}>
      <img src={zaloIcon} alt={zaloLabel} />
      <span>{zaloLabel}</span>
    </a>
  </li>
  <li>
    <a alt={wappLabel} href={wappLink}>
      <img src={wappIcon} alt={wappLabel} />
      <span>{wappLabel}</span>
    </a>
  </li>
  <li>
    <a alt={wechLabel} href={wechLink}>
      <img src={wechIcon} alt={wechLabel} />
      <span>{wechLabel}</span>
    </a>
  </li>
</ul>

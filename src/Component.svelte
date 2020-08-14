<script lang="ts">
  import ZaloSvg from './img/zalo.svg'
  import PhoneSvg from './img/phone.svg'
  import WhatsAppSvg from './img/whatsapp.svg'
  import WeChatSvg from './img/wechat.svg'

  export let phoneLabel = 'Call'
  export let phoneLink = 'tel:+84999999999'
  export let zaloLabel = 'Zalo'
  export let zaloLink = 'https://zalo.me'
  export let whatsAppLabel = 'WhatsApp'
  export let whatsAppLink = 'https://whatsapp.com'
  export let weChatLabel = 'WeChat'
  export let weChatLink = 'https://wechat.com'
</script>

<style lang="scss">
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

    @media (min-width: 640px) {
      width: 50px;
      grid: repeat(4, 50px) / 1fr;
    }

    > li {
      display: block;
      padding: 0;
    }
  }
</style>

<svelte:options tag="cta-bar" />

<ul>
  <li>
    <a alt={phoneLabel} href={phoneLink}>
      <div class="icon">
        <slot name="phoneIcon">
          <PhoneSvg />
        </slot>
      </div>
      <span>{phoneLabel}</span>
    </a>
  </li>
  <li>
    <a alt={zaloLabel} href={zaloLink}>
      <div class="icon">
        <slot name="zaloIcon">
          <ZaloSvg />
        </slot>
      </div>
      <span>{zaloLabel}</span>
    </a>
  </li>
  <li>
    <a alt={whatsAppLabel} href={whatsAppLink}>
      <div class="icon">
        <slot name="whatsAppIcon">
          <WhatsAppSvg />
        </slot>
      </div>
      <span>{whatsAppLabel}</span>
    </a>
  </li>
  <li>
    <a alt={weChatLabel} href={weChatLink}>
      <div class="icon">
        <slot name="weChatIcon">
          <WeChatSvg />
        </slot>
      </div>
      <span>{weChatLabel}</span>
    </a>
  </li>
</ul>

<script lang="ts">
  import { scroll } from './script/useScroll'

  import ZaloSvg from './img/zalo.svg'
  import PhoneSvg from './img/phone.svg'
  import WhatsAppSvg from './img/whatsapp.svg'
  import WeChatSvg from './img/wechat.svg'

  export let label_phone = 'CALL US'
  export let label_wechat = 'WE CHAT'
  export let label_whatsapp = 'WHATS APP'
  export let label_zalo = 'ZALO'
  export let link_phone = 'tel:+84999999999'
  export let link_wechat = 'https://wechat.com'
  export let link_whatsapp = 'https://whatsapp.com'
  export let link_zalo = 'https://zalo.me'

  let active: number = null
  const clearActive = () => (active = null)
  const activeSetters = [0, 1, 2, 3].map(i => () => (active = i))
</script>

<style lang="scss">
  @use 'style/mixin';
  @use 'style/main';
  @use 'style/section';
  @use 'style/icon';

  :host {
    --font: var(--ctaBar-font, 'Open Sans', Arial, sans-serif);
    --color: var(--ctaBar-color, #ffffff);
    --colorT7: var(--ctaBar-colorT7, #ffffffb3);
    --bgColor: var(--ctaBar-bgColor, #1b2127);
    --bgColorT7: var(--ctaBar-bgColorT7, #1b2127b3);
    --zIndex: var(--ctaBar-zIndex, 1000);
  }

  a {
    @include mixin.anchorReset();
  }

  * {
    box-sizing: border-box;
  }
</style>

<svelte:options tag="cta-bar" />

<!-- MAIN -->
<main class:mobileHidden={$scroll.down} on:mouseleave={clearActive}>
  <section class="key">
    <a
      class="icon"
      alt={label_phone}
      href={link_phone}
      class:active={active == 0}
      on:mouseover={activeSetters[0]}>
      <slot name="phoneIcon">
        <PhoneSvg />
        <!-- WORK_AROUND -->
        <svg style="display: none">
          <path />
        </svg>
        <!-- /WORK_AROUND -->
      </slot>
    </a>
    <a
      class="icon"
      alt={label_zalo}
      href={link_zalo}
      class:active={active == 1}
      on:mouseenter={activeSetters[1]}>
      <slot name="zaloIcon">
        <ZaloSvg />
      </slot>
    </a>
    <a
      class="icon"
      alt={label_whatsapp}
      href={link_whatsapp}
      class:active={active == 2}
      on:mouseover={activeSetters[2]}>
      <slot name="whatsAppIcon">
        <WhatsAppSvg />
      </slot>
    </a>
    <a
      class="icon"
      alt={label_wechat}
      href={link_wechat}
      class:active={active == 3}
      on:mouseover={activeSetters[3]}>
      <slot name="weChatIcon">
        <WeChatSvg />
      </slot>
    </a>
  </section>

  <section class="side">
    <a
      class="label"
      alt={label_phone}
      href={link_phone}
      class:active={active == 0}
      on:mouseover={activeSetters[0]}>
      {label_phone}
    </a>
    <a
      class="label"
      alt={label_zalo}
      href={link_zalo}
      class:active={active == 1}
      on:mouseover={activeSetters[1]}>
      {label_zalo}
    </a>
    <a
      class="label"
      alt={label_whatsapp}
      href={link_whatsapp}
      class:active={active == 2}
      on:mouseover={activeSetters[2]}>
      {label_whatsapp}
    </a>
    <a
      class="label"
      alt={label_wechat}
      href={link_wechat}
      class:active={active == 3}
      on:mouseover={activeSetters[3]}>
      {label_wechat}
    </a>
  </section>

</main>
<!-- /MAIN -->

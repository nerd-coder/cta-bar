<script lang="ts">
  import { scroll } from './script/useScroll'

  import ZaloSvg from './img/zalo.svg'
  import PhoneSvg from './img/phone.svg'
  import WhatsAppSvg from './img/whatsapp.svg'
  import WeChatSvg from './img/wechat.svg'

  export let phoneLabel = 'CALL US'
  export let phoneLink = 'tel:+84999999999'
  export let zaloLabel = 'ZALO'
  export let zaloLink = 'https://zalo.me'
  export let whatsAppLabel = 'WHATS APP'
  export let whatsAppLink = 'https://whatsapp.com'
  export let weChatLabel = 'WE CHAT'
  export let weChatLink = 'https://wechat.com'

  let active: number = null
  const clearActive = () => (active = null)
  const activeSetters = [0, 1, 2, 3].map(i => () => (active = i))
</script>

<style lang="scss">
  @use 'style/mixin';
  @use 'style/main';
  @use 'style/section';
  @use 'style/icon';

  main {
    --font: var(--ctaBar-font, 'Open Sans', Arial, sans-serif);
    --color: var(--ctaBar-color, hsl(0, 0%, 100%));
    --colorT7: var(--ctaBar-colorT7, rgba(255, 255, 255, 0.7));
    --bgColor: var(--ctaBar-bgColor, hsl(210, 19%, 13%));
    --bgColorT7: var(--ctaBar-bgColorT7, hsla(210, 19%, 13%, 0.7));
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
      alt={phoneLabel}
      href={phoneLink}
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
      alt={zaloLabel}
      href={zaloLink}
      class:active={active == 1}
      on:mouseenter={activeSetters[1]}>
      <slot name="zaloIcon">
        <ZaloSvg />
      </slot>
    </a>
    <a
      class="icon"
      alt={whatsAppLabel}
      href={whatsAppLink}
      class:active={active == 2}
      on:mouseover={activeSetters[2]}>
      <slot name="whatsAppIcon">
        <WhatsAppSvg />
      </slot>
    </a>
    <a
      class="icon"
      alt={weChatLabel}
      href={weChatLink}
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
      alt={phoneLabel}
      href={phoneLink}
      class:active={active == 0}
      on:mouseover={activeSetters[0]}>
      {phoneLabel}
    </a>
    <a
      class="label"
      alt={zaloLabel}
      href={zaloLink}
      class:active={active == 1}
      on:mouseover={activeSetters[1]}>
      {zaloLabel}
    </a>
    <a
      class="label"
      alt={whatsAppLabel}
      href={whatsAppLink}
      class:active={active == 2}
      on:mouseover={activeSetters[2]}>
      {whatsAppLabel}
    </a>
    <a
      class="label"
      alt={weChatLabel}
      href={weChatLink}
      class:active={active == 3}
      on:mouseover={activeSetters[3]}>
      {weChatLabel}
    </a>
  </section>

</main>
<!-- /MAIN -->

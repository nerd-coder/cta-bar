<script lang="ts">
  import { scroll } from './script/useScroll'
  import sortBy from './script/sortBy'

  import ZaloSvg from './img/zalo.svg'
  import PhoneSvg from './img/phone.svg'
  import WhatsAppSvg from './img/whatsapp.svg'
  import WeChatSvg from './img/wechat.svg'

  const isTruthly = (s: string) => s == 'true'

  // Visible
  export let phone = 'true'
  export let wechat = 'true'
  export let whatsapp = 'true'
  export let zalo = 'true'
  // Order
  export let order_phone = '0'
  export let order_wechat = '0'
  export let order_whatsapp = '0'
  export let order_zalo = '0'
  // Label
  export let label_phone = 'CALL US'
  export let label_wechat = 'WE CHAT'
  export let label_whatsapp = 'WHATS APP'
  export let label_zalo = 'ZALO'
  // Link
  export let link_phone = 'tel:+84999999999'
  export let link_wechat = 'https://wechat.com'
  export let link_whatsapp = 'https://whatsapp.com'
  export let link_zalo = 'https://zalo.me'

  $: data = [
    {
      visible: isTruthly(phone),
      label: label_phone,
      link: link_phone,
      slot: 'phone',
      order: +order_phone,
      Icon: PhoneSvg,
    },
    {
      visible: isTruthly(wechat),
      label: label_wechat,
      link: link_wechat,
      slot: 'wechat',
      order: +order_wechat,
      Icon: WeChatSvg,
    },
    {
      visible: isTruthly(whatsapp),
      label: label_whatsapp,
      link: link_whatsapp,
      slot: 'whatsapp',
      order: +order_whatsapp,
      Icon: WhatsAppSvg,
    },
    {
      visible: isTruthly(zalo),
      label: label_zalo,
      link: link_zalo,
      slot: 'zalo',
      order: +order_zalo,
      Icon: ZaloSvg,
    },
  ].sort(sortBy('order'))

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
    {#each data as { label, link, slot, Icon }, i (slot)}
      <a
        class="icon"
        alt={label}
        href={link}
        class:active={active == i}
        on:mouseover={activeSetters[i]}>
        <slot name={slot}>
          <Icon />
        </slot>
      </a>
    {/each}
  </section>

  <section class="side">
    {#each data as { label, link, slot, Icon }, i (slot)}
      <a
        class="label"
        alt={label}
        href={link}
        class:active={active == i}
        on:mouseover={activeSetters[i]}>
        {label}
      </a>
    {/each}
  </section>

  <!-- WORK_AROUND -->
  <i class="icon" style="display: none">
    <svg>
      <path />
    </svg>
  </i>
  <!-- /WORK_AROUND -->
</main>
<!-- /MAIN -->

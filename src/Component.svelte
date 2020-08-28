<script lang="ts">
  import { scroll } from './script/useScroll'
  // import {onScroll} from './script/scrollMobile'

  import sortBy from './script/sortBy'

  import ZaloSvg from './img/zalo.svg'
  import PhoneSvg from './img/phone.svg'
  import WhatsAppSvg from './img/whatsapp.svg'
  import WeChatSvg from './img/wechat.svg'
  import LineSvg from './img/line.svg'
  import NextSvg from './img/next.svg'
  import type svelte from 'rollup-plugin-svelte'

  const isTruthly = (s: string) => s == 'true'

  // Visible
  export let phone = 'true'
  export let wechat = 'true'
  export let whatsapp = 'true'
  export let zalo = 'true'
  export let line = 'true'
  // Order
  export let order_phone = '0'
  export let order_wechat = '1'
  export let order_whatsapp = '2'
  export let order_line ='3'
  export let order_zalo = '4'
  // Label
  export let label_phone = 'CALL US'
  export let label_wechat = 'WE CHAT'
  export let label_whatsapp = 'WHATS APP'
  export let label_zalo = 'ZALO'
  export let label_line = 'LINE'
  // Link
  export let link_phone = 'tel:+84999999999'
  export let link_wechat = 'https://wechat.com'
  export let link_whatsapp = 'https://whatsapp.com'
  export let link_zalo = 'https://zalo.me'
  export let link_line = 'https://line.me'

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
    {
      visible: isTruthly(line),
      label: label_line,
      link: link_line,
      slot: 'line',
      order: +order_line,
      Icon: LineSvg,
    },
  ]
    .filter(z => z.visible)
    .sort(sortBy('order'))

  let active: number = null
  const clearActive = () => (active = null)
  const activeSetters = [0, 1, 2, 3, 4].map(i => () => (active = i))
</script>

<style lang="scss">
  @use 'style/mixin';
  @use 'style/main';
  @use 'style/section';
  @use 'style/icon';

  :host {
    --font: 'Open Sans', Arial, sans-serif;
    --color: #ffffff;
    --colorT7: #ffffffb3;
    --bgColor: #1b2127;
    --bgColorT7: #1b2127b3;
    --zIndex: 1000;
    --spacingBottom: 0px;
    --spacingTop: 15vh;
    --spacingLeft: unset;
    --spacingRight: 0px;
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
  <section class="key" >
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
        <div class="label labelM ">
          {label}
        </div>
      </a>
    {/each}
  </section>
  <!-- <div class="btnNext" id="iconNext">
    <div  class="iconNext">
    </div>
  </div>
  <div class="btnBack" id="iconBack">
    <div  class="iconBack">
    </div>
  </div> -->

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
  <i class="icon label active" style="display: none">
    <slot>
      <svg>
        <path />
      </svg>
    </slot>
  </i>
  <!-- /WORK_AROUND -->
</main>
<!-- /MAIN -->

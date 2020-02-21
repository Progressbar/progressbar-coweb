<template>
<div class="techAmbasadors">
  <div class="columns">
    <div class="column is-parent is-8">
      <div class="columns">
        <div class="column is-4" v-for="ambssador in techAmbassadors.slice(0,3)">
          <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4" v-for="ambssador in techAmbassadors.slice(3,6)">
          <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4" v-for="ambssador in techAmbassadors.slice(6,9)">
          <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4" v-for="ambssador in techAmbassadors.slice(9,12)">
          <a :href="ambssador.url"><img :src="ambssador.src" :alt="ambssador.alt"></a>
        </div>
      </div>
    </div>
    <div class="column is-parent is-4">
      <article class="tile is-child notification is-black is-size-5">
        <div class="content">
          <p class="title">🦄 Tech Ambassadors</p>
          <div class="content">
            <p>
              We endorse various blockchain and decentralization projects.
              We care about their community and trying to do best for their growth.
            </p>
            <p>We organize workshops and onboarding new people to use their tech.
              Want to be part of it? Contact us 💞
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'techAmbasadors',
  data() {
    return {
      techAmbassadors: [
        {
          url: 'https://loomx.io/',
          src: '/static/img/partners/loom_white.svg',
          alt: 'loomx network sidechain logo'
        },
        {
          url: 'https://ethereum.org',
          src: '/static/img/partners/ethereum-logo.png',
          alt: 'ethereum blockchain logo'
        },
        {
          url: 'https://www.scuttlebutt.nz',
          src: '/static/img/partners/secure_scuttlebutt.png',
          alt: 'secure scuttlebutt decentralized protocol logo'
        },
        // {
        //   url: 'https://www.decent.ch',
        //   src: '/static/img/partners/DECENT_logo_vertical_color.png',
        //   alt: 'decent blockchain logo'
        // },
        {
          url: 'https://ipfs.io',
          src: '/static/img/partners/ipfs_2016-05-09-ipfs-3d-ice-text.png',
          alt: 'ipfs logo'
        },
        {
          url: 'https://makerdao.com',
          src: '/static/img/partners/maker.svg',
          alt: 'maker logo'
        },
        {
          url: 'https://aragon.org',
          src: '/static/img/partners/aragon_vertical@2x.webp',
          alt: 'aragon logo'
        },
        {
          url: 'https://tezos.com/',
          src: '/static/img/partners/tezos_logo_white.png',
          alt: 'Tezos Foundation logo'
        },
        {
          url: 'https://cosmos.network',
          src: '/static/img/partners/cosmosnetwork.png',
          alt: 'Cosmos Network logo'
        },
        {
          url: 'https:///polkadot.network',
          src: '/static/img/partners/polkadotnetwork.svg',
          alt: 'Polkadot network logo'
        }
      ],
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
  .contains-iframe-to-center {
    text-align: center;
  }

  .notification {
  padding: 0;
  }

  .card-content {
    padding: 1rem;
  }

  .content ul {
    list-style-type: square;
    margin-top: 0;
  }

  .section-title {
    margin-top: 1.5rem;
  }

  .notification {
    padding: 0;
  } */
</style>

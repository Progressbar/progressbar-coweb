<template>
<div class="offer">
  <div class="columns">
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Daypass
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                ⏰  {{ openHours.dayPass.start }} - {{ openHours.dayPass.end }}
              </li>
              <li>
                Hotdesk ♨️
              </li>
              <li>
                {{ orderPrices.day }}€ / day
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Flex (30 days)
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                ⏰  {{ openHours.monthPass.start }} - {{ openHours.monthPass.end }}
              </li>
              <li>
                Hotdesk ♨️
              </li>
              <li>
                {{ orderPrices.month }}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Fixdesk
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                ⏰ {{ openHours.fixdesk.start }} - {{ openHours.fixdesk.end }}
              </li>
              <li>
                Fixdesk (180cm desk)
              </li>
              <li>
                {{ orderPrices.fix }}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Meeting room 🤝
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>Glass sealed</li>
              <li>
                10 chairs
              </li>
              <li>
                Whiteboard
              </li>
              <li>Separate projector</li>
              <li>
                5€ / hour
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            24/7 access (addon)
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Work any 🕙
              </li>
              <li>
                {{ orderPrices.nonstop}}€ / month
              </li>
              <li>Play your own music (if it doesn't disturb anyone)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <s>Locker (addon)</s>
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>
                Lock your 💎 💻
              </li>
              <li>
                {{ orderPrices.locker}}€ / month
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'offer',
  data() {
    return {
      orderPrices: {
        day: 8,
        month: 100,
        fix: 180,
        locker: 10,
        nonstop: 20
      },
      openHours: {
        monthPass: {
          start: '06:00',
          end: '18:00'
        },
        dayPass: {
          start: '09:00',
          end: '18:00'
        },
        fixdesk: {
          start: '06:00',
          end: '18:00'
        }
      },
    }
  }
}
</script>

<style scoped>
input {
  background-color: #ffffff;
}
</style>

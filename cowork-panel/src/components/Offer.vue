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
            </ul>
            <div class="offer-price">
              {{ orderPrices.day }}€ / day
            </div>
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
            </ul>
            <div class="offer-price">
              {{ orderPrices.month }}€ / month
            </div>
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
            </ul>
            <div class="offer-price">
              {{ orderPrices.fix }}€ / month
            </div>
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
            </ul>
            <div class="offer-price">
              {{ orderPrices.meetingRoom }}€ / hour
            </div>
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
              <li>Play your own music (if it doesn't disturb anyone)</li>
            </ul>
            <div class="offer-price">
              {{ orderPrices.nonstop}}€ / month
            </div>
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
        nonstop: 20,
        meetingRoom: 5,
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
.content ul {
  list-style-type: square;
  margin-top: 0;
}

.card-content {
  padding: 1rem;
}

.offer-price {
  text-align: center;
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  /* border-top: 1px solid black; */
}
</style>

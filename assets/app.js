$(document).ready(function ($) {
  let chatDuration = 2000;
  let firstDelay = 6000;
  let totalTime = 0;

  function chatDisplay() {
    setTimeout(function () {
      jQuery(".chat_box_conversation").removeClass("conversation_is_activated");
      jQuery(".chat_box.user:not(.user+.user)").addClass("user_first_node");
      // jQuery(".greeting_col .check_box").each(function (ind, checkElem) {
      //   let duration = chatDuration * ind;
      //   totalTime = duration;
      //   jQuery(checkElem).find("img").delay(duration).fadeIn(300);
      // });
      jQuery(".chat_box").each(function (ind, elem) {
        let duration = chatDuration * ind;
        // console.log(duration);
        totalTime = duration;

        jQuery(elem).delay(duration).slideDown(300);

        jQuery(elem)
          .parents(".chat_box_conversation")
          .delay(duration)
          .queue(function (next) {
            var $this = jQuery(this);
            setTimeout(function () {
              $this.addClass("conversation_is_activated");
              next();
              console.log(duration);
            }, 0);
          });

        // jQuery(".greeting_col .check_box").each(function (_, checkElem) {
        //   jQuery(checkElem)
        //     .find("img")
        //     .delay(0)
        //     .queue(function (next) {
        //       let $this = jQuery(this);
        //       setTimeout(function () {
        //         $this.fadeIn(300);
        //         next();
        //       }, duration);
        //     });
        // });

        setTimeout(() => {
          // $(".chat_body").animate(
          //   {
          //     scrollTop: $(elem).offset().top,
          //   },
          //   1000
          // );
          $(".chat_column.main_chat").animate(
            {
              scrollTop: $(document).height() + $(window).height(),
            },
            300
          );

          // console.log(duration);
        }, duration + 2000);
      });
      var startEvent = new CustomEvent("slide_ended", {
        detail: { timer: totalTime },
      });
      document.dispatchEvent(startEvent);
    }, firstDelay + 2000);
  }

  // Restarting the ChatDisplay Function
  document.addEventListener("slide_ended", (event) => {
    setTimeout(function () {
      jQuery(".chat_box").fadeOut(0);
      chatDisplay();
      jQuery(".greeting_col .check_box img").fadeOut(0);
      console.log("Event restarted: " + event.detail.timer);
    }, event.detail.timer + firstDelay);
  });

  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  var meridian = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var strTime = h + ":" + m + " " + meridian;

  // Data Mapping
  jQuery(chatData).map(function (ind, data) {
    let agentChatBox = "";
    data.agent.map(function (agentMsgArr, agentIndex) {
      agentChatBox += `
        <section class="chat_box agent">
          <div class="msg">
            <h5>Agent: ${strTime}</h5>
            <h6>
            ${agentMsgArr}
            </h6>
          </div>
        </section>
      `;
    });

    let userChatBox = "";
    if (data.user.length > 0) {
      data.user.map(function (userMsgArr, userIndex) {
        userChatBox += `
      <section class="chat_box user">
        <div class="msg">
          <h5>Visitor: ${strTime}</h5>
          <h6>${userMsgArr}</h6>
          <h5 class="read_check"><span>Read<span> <img src='./assets/images/read.png' width='10'/></h5>
        </div>
      </section>
    `;
      });
    }

    let chats = `
    <main class="chat_box_conversation" data-chat-num=${ind + 1}>
        ${agentChatBox}
        ${userChatBox}
      </main>`;

    jQuery(".main_chat").append(chats);
  });

  jQuery(chatData).map(function (ind, data) {
    let chatInfo = `
    <section class="check_box">
            <div class="checked">
              <img
                src="./assets/images/check-mark.png"
                alt="Check Mark"
                style="max-width: 100%"
                width="30"
              />
            </div>
            <div class="check_content">
              <h5><strong>${data.infoTitle}</strong></h5>
              <p>${data.infoMsg}</p>
            </div>
          </section>
    `;
    jQuery(".greeting_col").append(chatInfo);
  });
  /*
  const ChatSection = document.querySelector(".fourthfold h2.title");
  let isChatDisplayed = false;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  window.addEventListener("scroll", function () {
    if (isElementInViewport(ChatSection) && !isChatDisplayed) {
      chatDisplay(); // PRODUCTION
      isChatDisplayed = true;
    }
  });
  */

  chatDisplay(); // DEVELOPMENT
});

console.log(chatData[1].agent);

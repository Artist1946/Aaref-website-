const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

/* صور لكل خطوة — أنت تغيّرها بحرّية */
const stepImages = {
    '1': "Photos.jpg",
    '2': "Photos1.jpg",
    '2_1': "Photos2.jpg",
    '3': "Photos3.jpg",
    'end_wait': "ctrl+r.jpg",
    'end_love': "Photos4.jpg",
    'end_surprise': "Photos5.jpg",
};

/* الأسئلة */
const questions = {
    '1': {
        text: "هل انت مستعدة لمفاجأة؟",
        buttons: [
            { text: "يلا ", next: '2' },
            { text: "لا ", next: 'end_wait' }
        ]
    },
    '2': {
        text: "جاهزه لتشوفي المفاجأة؟",
        buttons: [
            { text: "يلاااا", next: '3' },
            { text: "لا لا لا", next: '2_1' }
        ]
    },
    '2_1': {
        text: "يا حيوانة ليش لا؟",
        buttons: [
            { text: "اضغطي على زر لا اموتك روحي اقري ", next: '3' },

        ]
    },
    '3': {
        text: "شو شي بدك ياه هسا ؟ ",
        buttons: [
            { text: "نشوفيني ؟ ", next: 'end_love' },
            { text: "كلام الي كان في نفسي ؟ ", next: 'end_surprise' }
        ]
    },

    'end_wait': { text: "اضغط Ctrl مع R لا افقع راسك ", buttons: [] },
    'end_love': { text: "وانا نفسي اشوفك و احضنك ", buttons: [] },
    'end_surprise': {
        text: `أميرة… في شغلة صارلي فترة مخبيها بقلبي، وحاب أحكيها إلك بصراحة.
إنتِ كنتِ وما زلتي مثل أختي، وأقرب إنسانة لإلي، وحياتي ما كانت نفس الشي بدونك. وجودِك جنبي دايمًا كان يريحني ويعطيني قوة.

بس مع الوقت… صرت أحس بمشاعر أكثر، مش بس محبة أخو لأخته، لأ… محبة قلب لقلب. صرت أحبّك بطريقة أكبر، وبدي تكوني شريكة حياتي ومرتي بالمستقبل، بالحلال.
وبرغم هيك، والله العظيم احترامك جوّا قلبي ما تغيّر، ولسه بشوفك غالية مثل أختي وبخاف على زعلك.

أنا بحبك… بحبك كأخت قريبة على قلبي، وبحبك كبنت نفسي أعيش معها عمري.
وإذا ربنا كتب نصيب… بكون أسعد واحد، وإذا ما كان… والله ما راح تتغيّري بإشي، وراح تضلِّي أختي الغالية اللي مستحيل أزعلها أو أخسرها.`,
        buttons: []
    }

};

function changeImage(step) {
    if (stepImages[step]) mainImage.src = stepImages[step];
}

function renderStep(step = '1') {
    changeImage(step);

    const data = questions[step];

    if (step.startsWith("end")) {
        questionText.classList.add("hidden");
        buttonsContainer.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        finalMessage.innerHTML = data.text;
        return;
    }

    questionText.classList.remove("hidden");
    buttonsContainer.classList.remove("hidden");

    questionText.innerHTML = data.text;
    buttonsContainer.innerHTML = "";

    data.buttons.forEach(btn => {
        const el = document.createElement("button");
        el.className = "action-button";
        el.innerText = btn.text;
        el.onclick = () => renderStep(btn.next);
        buttonsContainer.appendChild(el);
    });
}

window.onload = () => {
    renderStep();
    createPixelHeart();
};


/* قلوب الخلفية */
setInterval(() => {
    const r_size = Math.random() * 50 + 10;
    const r_left = Math.random() * 100;
    const r_color = 100 + Math.random() * 150;
    const r_time = 5 + Math.random() * 5;

    $(".bg_heart").append(`
        <div class="floating-heart"
             style="width:${r_size}px;height:${r_size}px;left:${r_left}%;
             background:rgba(255,${r_color - 50},${r_color},0.9);
             animation:love ${r_time}s linear;">
        </div>
    `);

}, 400);

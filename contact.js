const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

if (form && popup) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if(!name || !email || !message){
            popup.innerHTML="⚠️ Please fill all fields";
            popup.classList.add("show");

            setTimeout(()=>{
                popup.classList.remove("show");
            },3000);

            return;
        }

        popup.innerHTML=`🎉 Thank You ${name}! Your message has been sent.`;

        popup.classList.add("show");

        form.reset();

        setTimeout(()=>{
            popup.classList.remove("show");
        },3000);

    });

}
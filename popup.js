document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("meetingData", (data) => {
        if (!data.meetingData) return;

        document.getElementById("yesButton").addEventListener("click", async() => {
            const resp=
            await fetch("https://ca8f-61-14-206-69.ngrok-free.app/extension", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data.meetingData),
            })
            data=await resp.json();
            if(resp.ok){
            window.close();
            }
        });

        document.getElementById("noButton").addEventListener("click", () => window.close());
    });
});

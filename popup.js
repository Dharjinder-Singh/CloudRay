document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("meetingData", (data) => {
        if (!data.meetingData) return;

        document.getElementById("yesButton").addEventListener("click", async() => {
            await fetch("https://1065-2409-40c2-103f-63f5-59a1-ca4d-de21-3adb.ngrok-free.app/extension", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data.meetingData),
            })
            .then(response => response.json())
            .then(data => console.log("Server response:", data))
            .catch(error => console.error("Error:", error));

            window.close();
        });

        document.getElementById("noButton").addEventListener("click", () => window.close());
    });
});

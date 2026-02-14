
# LIME: Vaccine Management System

**Learning Information Monitoring & Evaluation**

> **"Bridging the last-mile gap in healthcare using IoT, AI, and simple mobile technology."**

---

## The Problem

In many parts of Kenya, vaccines don't reach the children who need them. Why?

1. **Stock-outs:** Hospitals run out of vaccines (affecting 30% of clinics).
2. **Spoilage:** Fridges fail, and vaccines get too warm (wasting 20% of doses).
3. **Data Gaps:** Remote clinics use paper logs, so the government doesn't know there is a problem until it's too late.

##  Our Solution: LIME

LIME is an all-in-one system designed to make sure vaccines are always available and safe to use. It works even in places with **no internet** and **unreliable power.**

### Key Features:

* ** The Vaccibox (IoT):** A smart box with sensors that track temperature and door openings. It sends data over long distances using **LoRaWAN**.
* **USSD Reporting:** Nurses can update stock levels using a simple `*#` code on any basic phone—no smartphone or data plan required.
* ** AI Predictions:** Our computer "brain" (Prophet model) looks at past data to predict shortages **7 days before they happen.**
* ** Live Dashboard:** A website for health officers to see a "live map" of vaccine health across the country.

---

##  How it Works (The Tech Stack)

* **Hardware:** ESP32 Microcontroller, DS18B20 Temp Sensors, LoRaWAN (RAK3172).
* **Backend:** Python (FastAPI) & PostgreSQL Database.
* **Frontend:** React.js & Tailwind CSS (built for speed and clarity).
* **AI Model:** Time-series forecasting to predict stock depletion.

---

##  Impact Results

* **Accuracy:** Our AI predicts stockouts within **±1.5 days**.
* **Speed:** Reduced the "Response Lag" (time to restock) from **5 days to a few hours**.
* **Reliability:** LoRaWAN signal reached up to **12km** in rural areas.

---

##  Project Structure

```text
├── hardware/          # Arduino/C++ code for the Vaccibox sensors
├── backend/           # Python API and AI Prediction logic
├── frontend/          # React Dashboard code
├── research/          # Data analysis and survey results
└── docs/              # Project report and diagrams

```

---

##  Authors

* **Joseph Karanja** – Lead Developer & AI Logic
* **Emmanuel Sean** – Hardware Engineering & Data Analysis
* *Mentored by: Cynthia Wanyeki*

##  Acknowledgements

Special thanks to our school Principal and Science Patron for the financial and technical support to build this prototype.

---

###  Want to see it in action?

*Check out our [Appendices](https://lime-guard-aid.vercel.app/) for USSD flows and Dashboard screenshots!*






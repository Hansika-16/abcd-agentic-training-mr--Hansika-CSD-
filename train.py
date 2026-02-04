# train.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1️⃣ Load dataset (auto-detect separator)
data = pd.read_csv("dataset/student-mat.csv", sep=None, engine="python")
data.columns = data.columns.str.strip()  # remove extra spaces

# 2️⃣ Select features & target
X = data[["studytime", "absences", "G2"]]
y = data["pass"]

# 3️⃣ Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 4️⃣ Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 5️⃣ Train Random Forest
model = RandomForestClassifier(n_estimators=300, max_depth=8, random_state=42)
model.fit(X_train_scaled, y_train)

# 6️⃣ Evaluate
y_pred = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", round(accuracy * 100, 2), "%")

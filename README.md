# Tomato Disease Detection Mobile App

This repository contains the codebase for a mobile application designed to help users detect and diagnose common diseases in tomato plants using image recognition technology. The app provides users with a simple interface to capture or upload images of tomato leaves and receive instant feedback about potential diseases along with suggestions for treatment.

## Features
- **Disease Detection**: Uses a trained machine learning model to identify tomato plant diseases.
- **Camera Integration**: Capture images directly within the app or upload images from the gallery.
- **Diagnosis and Treatment Tips**: Provides disease-specific details and recommended actions.
- **Offline Support**: Basic functionality works without an internet connection.
- **Multilingual Support**: Available in multiple languages for wider accessibility.

## Technologies Used
- **Frontend**: Flutter (Dart) for cross-platform development.
- **Backend**: Firebase for user authentication and cloud storage.
- **Machine Learning**: TensorFlow Lite model optimized for mobile devices.
- **Database**: Firestore for storing user data and disease information.

## Prerequisites
Ensure the following tools and libraries are installed on your system:
- Flutter SDK
- Dart
- Android Studio or Xcode (for testing and debugging)
- Firebase CLI

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/tomato-disease-app.git
   cd tomato-disease-app
   ```

2. Install dependencies:
   ```bash
   flutter pub get
   ```

3. Configure Firebase:
   - Create a Firebase project and add your app's credentials.
   - Replace `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) in the `android/app` and `ios/Runner` directories, respectively.

4. Run the app:
   ```bash
   flutter run
   ```

## Usage
1. Launch the app on your mobile device.
2. Choose to capture an image using the camera or select an existing image from your gallery.
3. Wait for the app to analyze the image and display the results.
4. Follow the provided recommendations to treat or prevent the detected disease.

## Supported Diseases
The app can identify the following tomato plant diseases:
- Early Blight
- Late Blight
- Septoria Leaf Spot
- Leaf Mold
- Bacterial Spot
- Target Spot
- Spider Mites
- Healthy (no disease detected)

## Contribution
Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your forked repository.
4. Open a pull request detailing the changes made.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- The dataset for training the machine learning model was sourced from [Kaggle](https://www.kaggle.com/).
- Special thanks to the open-source community for libraries and tools.

---

For any issues or feature requests, please open an issue in this repository.

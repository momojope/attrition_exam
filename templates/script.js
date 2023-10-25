function predict() {
    // You can add dynamic behavior here before submitting the form
    // For example, you can use jQuery to make an AJAX request to your server for prediction
    // and update the #predictionText accordingly
    $('#predictionText').text('Predicting...');

    // Simulate a delay (you can replace this with actual AJAX call)
    setTimeout(function () {
        $('#predictionText').text('Prediction result: High attrition risk');
    }, 2000);
}

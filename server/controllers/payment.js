const stripe = require('stripe')("sk_test_51JDoXZHNJgBBTVaFiw0cLKUOS2WOYVfSRe6m3o7b30HhKiYiNn99BVIRtfF5NuSqPR1e3fzhwztPjKvX5xEGp3fK0081YI0QrL");



exports.getCheckoutSession = async (req, res, next) => {
    let { amount, id } = req.body
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Spatula company",
        payment_method: id,
        confirm: true
      })
      res.json({
        message: "Payment successful",                                                 
        success: true
      })
    } catch (error) {
      console.log("Error", error)   
      res.json({
        message: "Payment failed",
        success: false
      })
    }
};


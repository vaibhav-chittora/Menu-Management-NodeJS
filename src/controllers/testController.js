export const testController = async (req, res) => {
  try {
    return res.status(200).send({
      message: "api is working for testing...",
    });
  } catch (error) {
    console.log("Error in testController", error);
  }
};

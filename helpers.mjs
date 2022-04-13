const connectToDatabase = () =>
{
    const dummyPromise = new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve();
        }, 1000);
    });
    return dummyPromise;
}

export default connectToDatabase;
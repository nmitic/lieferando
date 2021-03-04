const trackingService = {
  async pageView(payloadData) {
    try {
      const res = await fetch(
        'http://localhost:11000/api/page-view',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payloadData)
        }
      )
    } catch (error) {
        console.error(error)
    }
  }
}

export default trackingService;
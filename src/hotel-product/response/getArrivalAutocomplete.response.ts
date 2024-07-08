export type GetArrivalAutoCompleteResponse = {
  body: {
    items: [
      {
        type: number;
        geolocation: {
          longitude: string;
          latitude: string;
        };
        country: {
          id: string;
          name: string;
        };
        state: {
          id: string;
          name: string;
        };
        city: {
          id: string;
          name: string;
        };
        provider: number;
        hotelCount: number;
      },
    ];
  };
  header: {
    requestId: string;
    success: boolean;
    responseTime: string;
    messages: [
      {
        id: number;
        code: string;
        messageType: number;
        message: string;
      },
    ];
  };
};

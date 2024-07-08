export type GetPriceSearchResponse = {
  body: {
    searchId: string;
    expiresOn: string;
    hotels: [
      {
        geolocation: {
          longitude: string;
          latitude: string;
        };
        stars: number;
        rating: number;
        themes: [
          {
            id: string;
            name: string;
          },
        ];
        facilities: [
          {
            isPriced: boolean;
            id: string;
            name: string;
          },
        ];
        location: {
          name: string;
          countryId: string;
          provider: number;
          isTopRegion: boolean;
          id: string;
        };
        country: {
          internationalCode: string;
          name: string;
          provider: number;
          isTopRegion: boolean;
        };
        city: {
          name: string;
          countryId: string;
          provider: number;
          isTopRegion: boolean;
          id: string;
        };
        giataInfo: {
          hotelId: string;
          destinationId: string;
        };
        offers: [
          {
            night: number;
            isAvailable: boolean;
            availability: number;
            availabilityChecked: boolean;
            rooms: [
              {
                roomId: string;
                roomName: string;
                boardId: string;
                boardName: string;
                boardGroups: [
                  {
                    id: string;
                    name: string;
                  },
                ];
                stopSaleGuaranteed: number;
                stopSaleStandart: number;
                travellers: [
                  {
                    type: number;
                    age: number;
                    nationality: string;
                  },
                ];
                thirdPartyInformation: object;
                visiblePL: boolean;
              },
            ];
            isRefundable: boolean;
            cancellationPolicies: [];
            thirdPartyOwnOffer: boolean;
            restrictions: [];
            warnings: [];
            isChannelManager: boolean;
            expiresOn: string;
            offerId: string;
            checkIn: string;
            price: {
              amount: number;
              currency: string;
            };
          },
        ];
        address: string;
        boardGroups: [
          {
            id: string;
            name: string;
          },
        ];
        boards: [];
        hotelCategory: {
          name: string;
          id: string;
          code: string;
        };
        hasThirdPartyOwnOffer: boolean;
        thirdPartyInformation: {
          infos: [];
        };
        hasChannelManagerOffer: boolean;
        provider: number;
        thumbnail: string;
        thumbnailFull: string;
        description: {
          text: string;
        };
        id: string;
        name: string;
      },
    ];
    details: {
      enablePaging: boolean;
    };
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

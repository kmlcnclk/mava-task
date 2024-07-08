export type LoginResponse = {
  body: {
    token: string;
    expiresOn: string;
    tokenId: number;
    userInfo: {
      mainAgency: {
        ownAgency: boolean;
        useOwnWebSettings: boolean;
        sendFlightInfoSms: boolean;
        allowUnpaidRes: number;
        aceExport: boolean;
        allowNon3DPayments: boolean;
        bonusUseSysParam: boolean;
        bonusUserSeeAgencyW: boolean;
        bonusUserSeeOwnW: boolean;
        allowAddCredit: boolean;
        showAgencyLogoOnB2b: boolean;
        hideInstallmentTable: boolean;
        hideAgencyCreditOnWeb: boolean;
        force2FactorAuth: boolean;
        location: number;
      };
      agency: {
        id: string;
        code: string;
        name: string;
        registerCode: string;
        firmName: string;
        licenseNo: string;
        ownAgency: boolean;
        paymentFrom: number;
        qcPcc: string;
        qIdentNo: string;
        useOwnWebSettings: boolean;
        sendFlightInfoSms: boolean;
        allowUnpaidRes: number;
        aceExport: boolean;
        nationality: string;
        allowNon3DPayments: boolean;
        webSetGrp: string;
        bonusUseSysParam: boolean;
        bonusUserSeeAgencyW: boolean;
        bonusUserSeeOwnW: boolean;
        allowAddCredit: boolean;
        showAgencyLogoOnB2b: boolean;
        hideInstallmentTable: boolean;
        hideAgencyCreditOnWeb: boolean;
        force2FactorAuth: boolean;
        location: number;
      };
      office: {
        code: string;
        name: string;
      };
      operator: {
        code: string;
        name: string;
        thumbnail: string;
        agencyCanDiscountCommission: boolean;
      };
      market: {
        code: string;
        name: string;
        favicon: string;
        faviconPng: string;
      };
      webSiteId: number;
      marketWebSiteId: number;
      allowChangePassword: boolean;
      allowCreateNewUser: boolean;
      allowCreateAgency: boolean;
      allowMakeReservation: boolean;
      allowEditReservation: boolean;
      allowCancelReservation: boolean;
      allowB2BUpdate: boolean;
      mobile: string;
      email: string;
      allowApiAccess: boolean;
      lastAccessDate: string;
      zohoTicketUpdate: boolean;
      name: string;
      id: string;
      code: string;
    };
    loggedInWithMasterKey: boolean;
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

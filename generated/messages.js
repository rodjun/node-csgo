var CSGO = require("../index");

CSGO.GCConnectionStatus = {
	GCConnectionStatus_HAVE_SESSION: 0,
	GCConnectionStatus_GC_GOING_DOWN: 1,
	GCConnectionStatus_NO_SESSION: 2,
	GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE: 3,
	GCConnectionStatus_NO_STEAM: 4,
}

CSGO.EGCSystemMsg = {
	k_EGCMsgInvalid: 0,
	k_EGCMsgMulti: 1,
	k_EGCMsgGenericReply: 10,
	k_EGCMsgSystemBase: 50,
	k_EGCMsgAchievementAwarded: 51,
	k_EGCMsgConCommand: 52,
	k_EGCMsgStartPlaying: 53,
	k_EGCMsgStopPlaying: 54,
	k_EGCMsgStartGameserver: 55,
	k_EGCMsgStopGameserver: 56,
	k_EGCMsgWGRequest: 57,
	k_EGCMsgWGResponse: 58,
	k_EGCMsgGetUserGameStatsSchema: 59,
	k_EGCMsgGetUserGameStatsSchemaResponse: 60,
	k_EGCMsgGetUserStatsDEPRECATED: 61,
	k_EGCMsgGetUserStatsResponse: 62,
	k_EGCMsgAppInfoUpdated: 63,
	k_EGCMsgValidateSession: 64,
	k_EGCMsgValidateSessionResponse: 65,
	k_EGCMsgLookupAccountFromInput: 66,
	k_EGCMsgSendHTTPRequest: 67,
	k_EGCMsgSendHTTPRequestResponse: 68,
	k_EGCMsgPreTestSetup: 69,
	k_EGCMsgRecordSupportAction: 70,
	k_EGCMsgGetAccountDetails_DEPRECATED: 71,
	k_EGCMsgReceiveInterAppMessage: 73,
	k_EGCMsgFindAccounts: 74,
	k_EGCMsgPostAlert: 75,
	k_EGCMsgGetLicenses: 76,
	k_EGCMsgGetUserStats: 77,
	k_EGCMsgGetCommands: 78,
	k_EGCMsgGetCommandsResponse: 79,
	k_EGCMsgAddFreeLicense: 80,
	k_EGCMsgAddFreeLicenseResponse: 81,
	k_EGCMsgGetIPLocation: 82,
	k_EGCMsgGetIPLocationResponse: 83,
	k_EGCMsgSystemStatsSchema: 84,
	k_EGCMsgGetSystemStats: 85,
	k_EGCMsgGetSystemStatsResponse: 86,
	k_EGCMsgSendEmail: 87,
	k_EGCMsgSendEmailResponse: 88,
	k_EGCMsgGetEmailTemplate: 89,
	k_EGCMsgGetEmailTemplateResponse: 90,
	k_EGCMsgGrantGuestPass: 91,
	k_EGCMsgGrantGuestPassResponse: 92,
	k_EGCMsgGetAccountDetails: 93,
	k_EGCMsgGetAccountDetailsResponse: 94,
	k_EGCMsgGetPersonaNames: 95,
	k_EGCMsgGetPersonaNamesResponse: 96,
	k_EGCMsgMultiplexMsg: 97,
	k_EGCMsgWebAPIRegisterInterfaces: 101,
	k_EGCMsgWebAPIJobRequest: 102,
	k_EGCMsgWebAPIJobRequestHttpResponse: 104,
	k_EGCMsgWebAPIJobRequestForwardResponse: 105,
	k_EGCMsgMemCachedGet: 200,
	k_EGCMsgMemCachedGetResponse: 201,
	k_EGCMsgMemCachedSet: 202,
	k_EGCMsgMemCachedDelete: 203,
	k_EGCMsgMemCachedStats: 204,
	k_EGCMsgMemCachedStatsResponse: 205,
	k_EGCMsgMasterSetDirectory: 220,
	k_EGCMsgMasterSetDirectoryResponse: 221,
	k_EGCMsgMasterSetWebAPIRouting: 222,
	k_EGCMsgMasterSetWebAPIRoutingResponse: 223,
	k_EGCMsgMasterSetClientMsgRouting: 224,
	k_EGCMsgMasterSetClientMsgRoutingResponse: 225,
	k_EGCMsgSetOptions: 226,
	k_EGCMsgSetOptionsResponse: 227,
	k_EGCMsgSystemBase2: 500,
	k_EGCMsgGetPurchaseTrustStatus: 501,
	k_EGCMsgGetPurchaseTrustStatusResponse: 502,
	k_EGCMsgUpdateSession: 503,
	k_EGCMsgGCAccountVacStatusChange: 504,
	k_EGCMsgCheckFriendship: 505,
	k_EGCMsgCheckFriendshipResponse: 506,
};

CSGO.ESOMsg = {
	k_ESOMsg_Create: 21,
	k_ESOMsg_Update: 22,
	k_ESOMsg_Destroy: 23,
	k_ESOMsg_CacheSubscribed: 24,
	k_ESOMsg_CacheUnsubscribed: 25,
	k_ESOMsg_UpdateMultiple: 26,
	k_ESOMsg_CacheSubscriptionCheck: 27,
	k_ESOMsg_CacheSubscriptionRefresh: 28,
};

CSGO.EGCBaseClientMsg = {
	k_EMsgGCClientWelcome: 4004,
	k_EMsgGCServerWelcome: 4005,
	k_EMsgGCClientHello: 4006,
	k_EMsgGCServerHello: 4007,
	k_EMsgGCClientConnectionStatus: 4009,
	k_EMsgGCServerConnectionStatus: 4010,
};

CSGO.EGCToGCMsg = {
	k_EGCToGCMsgMasterAck: 150,
	k_EGCToGCMsgMasterAckResponse: 151,
	k_EGCToGCMsgRouted: 152,
	k_EGCToGCMsgRoutedReply: 153,
	k_EMsgUpdateSessionIP: 154,
	k_EMsgRequestSessionIP: 155,
	k_EMsgRequestSessionIPResponse: 156,
	k_EGCToGCMsgMasterStartupComplete: 157,
};

CSGO.ECSGOCMsg = {
	k_EMsgGCCStrike15_v2_Base: 9100,
	k_EMsgGCCStrike15_v2_MatchmakingStart: 9101,
	k_EMsgGCCStrike15_v2_MatchmakingStop: 9102,
	k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing: 9103,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate: 9104,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ServerReserve: 9105,
	k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse: 9106,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve: 9107,
	k_EMsgGCCStrike15_v2_MatchmakingServerRoundStats: 9108,
	k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello: 9109,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello: 9110,
	k_EMsgGCCStrike15_v2_MatchmakingServerMatchEnd: 9111,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon: 9112,
	k_EMsgGCCStrike15_v2_MatchmakingServer2GCKick: 9113,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm: 9114,
	k_EMsgGCCStrike15_v2_MatchmakingGCOperationalStats: 9115,
	k_EMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate: 9116,
	k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate: 9117,
	k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty: 9118,
	k_EMsgGCCStrike15_v2_ClientReportPlayer: 9119,
	k_EMsgGCCStrike15_v2_ClientReportServer: 9120,
	k_EMsgGCCStrike15_v2_ClientCommendPlayer: 9121,
	k_EMsgGCCStrike15_v2_ClientReportResponse: 9122,
	k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery: 9123,
	k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse: 9124,
	k_EMsgGCCStrike15_v2_WatchInfoUsers: 9126,
	k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile: 9127,
	k_EMsgGCCStrike15_v2_PlayersProfile: 9128,
	k_EMsgGCCStrike15_v2_SetMyMedalsInfo: 9129,
	k_EMsgGCCStrike15_v2_PlayerEarnedRewardNotification: 9130,
	k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate: 9131,
	k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment: 9132,
	k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus: 9133,
	k_EMsgGCCStrike15_v2_GC2ClientTextMsg: 9134,
	k_EMsgGCCStrike15_v2_Client2GCTextMsg: 9135,
	k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops: 9136,
	k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification: 9137,
	k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2: 9138,
	k_EMsgGCCStrike15_v2_MatchList: 9139,
	k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames: 9140,
	k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames: 9141,
	k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate: 9142,
	k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo: 9144,
	k_EMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification: 9145,
	k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames: 9146,
	k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo: 9147,
	k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest: 9148,
	k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse: 9149,
	k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo: 9150,
	k_EMsgGCToGCReloadVersions: 9151,
	k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote: 9152,
	k_EMsgGCCStrike15_v2_Server2GCClientValidate: 9153,
	k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser: 9154,
	k_EMsgGCCStrike15_v2_Server2GCPureServerValidationFailure: 9155,
	k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest: 9156,
	k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse: 9157,
	k_EMsgGCCStrike15_v2_AccountPrivacySettings: 9158,
	k_EMsgGCCStrike15_v2_SetMyActivityInfo: 9159,
	k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions: 9160,
	k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions: 9161,
	k_EMsgGCCStrike15_v2_DraftSummary: 9162,
	k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData: 9163,
	k_EMsgGCCStrike15_v2_ClientRequestJoinServerData: 9164,
	k_EMsgGCCStrike15_v2_ClientRequestNewMission: 9165,
};
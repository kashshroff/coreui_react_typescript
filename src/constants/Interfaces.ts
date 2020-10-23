declare global {
    interface Window {
        REDUX_INITIAL_DATA: any
        devToolsExtension: any
        location: Location
        recaptchaVerifier: any
        recaptchaWidgetId: any
    }
}

export interface payload {
    id: string
}

export interface ActionObject {
    type: string
    payload: payload
}

export interface ActionWithPayload {
    type: string
    payload: any
}

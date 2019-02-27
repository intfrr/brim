/* @flow */

import Client from "boom-js-client"

import type {Space} from "../lib/Space"

export function fetchSpaceInfo(name: string) {
  return (dispatch: *, getState: *, api: Client) => {
    return api.space({name}).done(space => {
      dispatch(setSpaceInfo(space))
    })
  }
}

export const fetchAndSetCurrentSpace = (name: string) => {
  return (dispatch: Function) => {
    return dispatch(fetchSpaceInfo(name)).done(() => {
      dispatch(setCurrentSpaceName(name))
    })
  }
}

export const requestAllSpaces = () => {
  return {
    type: "ALL_SPACES_REQUEST"
  }
}

export function setSpaceInfo(spaceInfo: $Shape<Space>) {
  return {
    type: "SPACE_INFO_SET",
    spaceInfo
  }
}

export function requestSpaceInfo(name: string) {
  return {
    type: "SPACE_INFO_REQUEST",
    name
  }
}

export function setCurrentSpaceName(name: string) {
  return {
    type: "CURRENT_SPACE_NAME_SET",
    name
  }
}

export function setSpaceNames(names: string[]) {
  return {
    type: "SPACE_NAMES_SET",
    names
  }
}

export function clearSpaces() {
  return {
    type: "SPACES_CLEAR"
  }
}

const userPaths = {
	"/api/v1/users/profile": {
		"get": {
			"tags": [
				"Users Module"
			],
			"summary": "Retrieves the user profile information.",
			"description": "Fetches the user's profile data if the user is authorized.",
			"parameters": [
				{
					"in": "query",
					"name": "userId",
					"schema": {
						"type": "string"
					},
					"required": false,
					"description": "The ID of the user whose profile is being requested."
				}
			],
			"responses": {
				"200": {
					"description": "User profile data retrieved successfully.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": true,
								"message": "User profile retrieved successfully.",
								"data": {
									"id": "user123",
									"role": "admin",
									"name": "John Doe",
									"email": "john@example.com",
									"handle": "johndoe",
									"avatarUrl": "http://example.com/avatar.jpg",
									"status": "active",
									"location": "USA",
									"profileUrl": "http://example.com/profile/johndoe",
									"provider": "github",
									"providerUserId": "github123"
								},
								"errors": []
							}
						}
					}
				},
				"403": {
					"description": "Unauthorized access.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Unauthorized access.",
								"data": null,
								"errors": ["User is not authorized to access this resource."]
							}
						}
					}
				}
			}
		}
	},
	"/api/v1/users/themes": {
		"get": {
			"tags": [
				"Users Module"
			],
			"summary": "Retrieves themes belonging to the user.",
			"description": "Fetches the list of themes that belong to the user if the user is authorized.",
			"parameters": [
				{
					"in": "query",
					"name": "userId",
					"schema": {
						"type": "string"
					},
					"required": false,
					"description": "The ID of the user whose themes are being requested."
				}
			],
			"responses": {
				"200": {
					"description": "User's themes retrieved successfully.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": true,
								"message": "Themes retrieved successfully.",
								"data": [
									{
										"id": "theme123",
										"name": "Dark Mode",
										"description": "A sleek dark theme.",
										"version": "1.0.0"
									}
								],
								"errors": []
							}
						}
					}
				},
				"403": {
					"description": "Unauthorized access.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Unauthorized access.",
								"data": null,
								"errors": ["User is not authorized to access this resource."]
							}
						}
					}
				}
			}
		}
	},
	"/api/v1/users/themes/favorited": {
		"get": {
			"tags": [
				"Users Module"
			],
			"summary": "Retrieves themes favorited by the user.",
			"description": "Fetches the list of themes favorited by the user if the user is authorized.",
			"parameters": [
				{
					"in": "query",
					"name": "userId",
					"schema": {
						"type": "string"
					},
					"required": false,
					"description": "The ID of the user whose favorited themes are being requested."
				}
			],
			"responses": {
				"200": {
					"description": "User's favorited themes retrieved successfully.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": true,
								"message": "Favorited themes retrieved successfully.",
								"data": [
									{
										"id": "theme123",
										"name": "Dark Mode",
										"description": "A sleek dark theme.",
										"version": "1.0.0"
									}
								],
								"errors": []
							}
						}
					}
				},
				"403": {
					"description": "Unauthorized access.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Unauthorized access.",
								"data": null,
								"errors": ["User is not authorized to access this resource."]
							}
						}
					}
				}
			}
		},
		"post": {
			"tags": [
				"Users Module"
			],
			"summary": "Adds a theme to user's favorites.",
			"description": "Adds the specified theme to the user's list of favorited themes.",
			"requestBody": {
				"required": true,
				"content": {
					"application/json": {
						"schema": {
							"type": "object",
							"properties": {
								"themeId": {
									"type": "string",
									"description": "The ID of the theme to be added to favorites."
								}
							}
						}
					}
				}
			},
			"responses": {
				"201": {
					"description": "Theme added to favorites successfully.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": true,
								"message": "Theme added to favorites successfully.",
								"data": {
									"id": "theme123",
									"name": "Dark Mode",
									"description": "A sleek dark theme.",
									"version": "1.0.0"
								},
								"errors": []
							}
						}
					}
				},
				"404": {
					"description": "Theme not found.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Theme not found.",
								"data": null,
								"errors": ["The specified theme could not be found."]
							}
						}
					}
				},
				"400": {
					"description": "Theme already favorited.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Theme already favorited.",
								"data": null,
								"errors": ["The theme is already in the user's favorites."]
							}
						}
					}
				},
				"500": {
					"description": "Internal server error occurred while adding theme to favorites.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Internal server error.",
								"data": null,
								"errors": ["An error occurred while processing the request."]
							}
						}
					}
				}
			}
		},
		"delete": {
			"tags": [
				"Users Module"
			],
			"summary": "Removes a theme from user's favorites.",
			"description": "Removes the specified theme from the user's list of favorited themes.",
			"parameters": [
				{
					"in": "query",
					"name": "themeId",
					"schema": {
						"type": "string"
					},
					"required": true,
					"description": "The ID of the theme to be removed from favorites."
				}
			],
			"responses": {
				"200": {
					"description": "Theme removed from favorites successfully.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": true,
								"message": "Theme removed from favorites successfully.",
								"data": {
									"id": "theme123",
									"name": "Dark Mode",
									"description": "A sleek dark theme.",
									"version": "1.0.0"
								},
								"errors": []
							}
						}
					}
				},
				"404": {
					"description": "Favorite theme not found.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Favorite theme not found.",
								"data": null,
								"errors": ["The specified favorite theme could not be found."]
							}
						}
					}
				},
				"500": {
					"description": "Internal server error occurred while removing theme from favorites.",
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/ApiResult"
							},
							"example": {
								"success": false,
								"message": "Internal server error.",
								"data": null,
								"errors": ["An error occurred while processing the request."]
							}
						}
					}
				}
			}
		}
	}
};

export default userPaths;

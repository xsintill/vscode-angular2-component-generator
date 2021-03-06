import { WorkspaceConfiguration } from "vscode";

export interface Config extends WorkspaceConfiguration {
    files: {
        filter: {
            create: boolean,
            extension: string,
            template?: string,
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            }
        },
        controller: {
            create: boolean,
            extension: string,
            template?: string,
            css: {
                create: boolean,
                extension: string,
                template?: string
            },
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string

            }
        },
        directive: {
            create: boolean,
            extension: string,
            template?: string,
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
        },
        configRoute: {
            create: boolean,
            extension: string,
            template?: string,
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
        },
        service: {
            create: boolean,
            extension: string,
            template?: string
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
        },
        provider: {
            create: boolean,
            extension: string,
            template?: string
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
        },
        component: {
            create: boolean,
            extension: string,
            template?: string,
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
            css: {
                create: boolean,
                extension: string,
                template?: string
            },
            html: {
                create: boolean,
                extension: string,
                template?: string
            },
        },
        module: {
            create: boolean,
            extension: string,
            template?: string
        },
        mvpPattern:{
            create: boolean,
            extension: string,
            template?: string,
            testFile: {
                create: boolean,
                extension: string,
                alongSide: boolean,
                template?: string
            },
            css: {
                create: boolean,
                extension: string,
                template?: string
            },
            html: {
                create: boolean,
                extension: string,
                template?: string
            },
            presenter: {
                create: boolean,
                extension: string,
                template?: string,
                testFile: {
                    create: boolean,
                    extension: string,
                    alongSide: boolean,
                    template?: string
                }
            },
            container: {
                create: boolean,
                extension: string,
                template?: string,
                testFile: {
                    create: boolean,
                    extension: string,
                    alongSide: boolean,
                    template?: string
                },
                css: {
                    create: boolean,
                    extension: string,
                    template?: string
                },
                html: {
                    create: boolean,
                    extension: string,
                    template?: string
                },
            },
            service: {
                create: boolean,
                extension: string,
                template?: string
            },
            const: {
                create: boolean,
                extension: string,
                template?: string
            }
            type: {
                create: boolean,
                extension: string,
                template?: string
            }
        }
    };
    globals: {
        applicationName: string,
        prefix: string,
        test:{
            path: string,
            exclude: string[],
            postfix: string
        },
        sharedConstant: string,
        srcConstant: string
    };
};

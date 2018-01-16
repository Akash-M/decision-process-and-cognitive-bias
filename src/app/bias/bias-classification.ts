import { TreeModel } from 'ng2-tree';

export const BiasClassificationTree : TreeModel = {
    value: 'Cognitive Biases',
    id: 1,
    children: [
        {
            value: 'Observe Phase',
            id:2,
            children: [
                {
                    value: 'Information Gathering',
                    children: [
                        {value: 'Completeness'},
                        {value: 'Confirmation'},
                        {value: 'Information'},
                        {value: 'Levels-of-processing effect'},
                        {value: 'Reference'},
                        {value: 'Search'},
                    ]
                },
                {
                    value: 'Information Presentation',
                    children: [
                        {value: 'Framing'},
                        {value: 'Similarity'}
                    ]
                },
            ]
        },
        {
            value: 'Orient Phase',
            id:3,
            children: [
                {
                    value: 'Information Filtering',
                    children: [
                        {value: 'Base rate fallacy'}
                    ]
                },
                {
                    value: 'Semblance',
                    children: [
                        {value: 'Similarity'}
                    ]
                },
                {
                    value: 'Previous Knowledge / Experience',
                    children: [
                        {value: 'Availability Heuristic'},
                        {value: 'Functional Fixedness'},
                        {value: 'Google Effect'},
                        {value: 'Law of the instrument'},
                        {value: 'Mere exposure effect'},
                    ]
                },
                {
                    value: 'Trends',
                    children: [
                        {value: 'Bandwagon Effect'}
                    ]
                },
            ]
        },
        {
            value: 'Decide Phase',
            id:4,
            children: [
                {
                    value: 'Complexity',
                    children: [
                        {value: 'Attenuation'},
                        {value: 'Hard-easy effect'},
                        {value: 'Planning fallacy'},
                        {value: 'Time-saving bias'},
                        {value: 'Parkinson\'s law of triviality'},
                        {value: 'Well travelled road effect'},
                    ]
                },
                {
                    value: 'Nature of invention / Trends',
                    children: [
                        {value: 'Bandwagon Effect'},
                        {value: 'IKEA effect'},
                        {value: 'Pro-innovation'}
                    ]
                },
                {
                    value: 'Previous knowledge / Experience',
                    children: [
                        {value: 'Habit'},
                        {value: 'Law of the instrument'},
                        {value: 'Mere exposure effect'},
                        {value: 'Negativity'}
                    ]
                },
                {
                    value: 'Strategy',
                    children: [
                        {value: 'Test'},
                        {value: 'Hyperbolic Discounting'},
                        {value: 'Inconsistency'}
                    ]
                },
            ]
        },
        {
            value: 'Act Phase',
            id:5,
            children: [
                {value: 'Misinformation effect'},
                {value: 'Post-purchase rationalization'}
            ]
        }
    ]
};
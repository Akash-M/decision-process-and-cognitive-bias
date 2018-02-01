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
                    id:3,
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
                    id:4,
                    children: [
                        {value: 'Framing'},
                        {value: 'Similarity'}
                    ]
                },
            ]
        },
        {
            value: 'Orient Phase',
            id:5,
            children: [
                {
                    value: 'Information Filtering',
                    id:6,
                    children: [
                        {value: 'Base rate fallacy'}
                    ]
                },
                {
                    value: 'Semblance',
                    id:7,
                    children: [
                        {value: 'Similarity'}
                    ]
                },
                {
                    value: 'Previous Knowledge / Experience',
                    id:8,
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
                    id:9,
                    children: [
                        {value: 'Bandwagon Effect'}
                    ]
                },
            ]
        },
        {
            value: 'Decide Phase',
            id:10,
            children: [
                {
                    value: 'Complexity',
                    id:11,
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
                    id:12,
                    children: [
                        {value: 'Bandwagon Effect'},
                        {value: 'IKEA effect'}
                    ]
                },
                {
                    value: 'Previous knowledge / Experience',
                    id:13,
                    children: [
                        {value: 'Habit'},
                        {value: 'Law of the instrument'},
                        {value: 'Mere exposure effect'},
                        {value: 'Negativity'}
                    ]
                },
                {
                    value: 'Strategy',
                    id:14,
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
            id:15,
            children: [
                {value: 'Misinformation effect'},
                {value: 'Post-purchase rationalization'}
            ]
        }
    ]
};